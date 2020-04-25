# dt-collections-tags

Aplicação Node.js 12.14.1, npm 6.13.4 `app.js` configurado na porta LISTEN padrão 32321

# Iniciando o projeto local

```
npm install
node app.js
```

# Configurando conexao com o Twitter

Altere as informações contidas no arquivo `.env` contido no diretório raíz da aplicação, com suas credencias de acesso ao Twitter Developer.

```
CONSUMER_KEY=<SUA_CONSUMER_KEY>;
CONSUMER_SECRET=<SUA_CONSUMER_SECRET>;
ACCESS_TOKEN=<SUA_ACCESS_TOKEN>;
ACCESS_TOKEN_SECRET=<SUA_ACCESS_TOKEN_SECRET>;
```

# Configurando sua conta do Atlas MongoDB

Altere o arquivo `./config/dbConnection.js` inserindo a url de conexao com seu Atlas MongoDB account, contidos no dash `SANDBOX`, em: `https://cloud.mongodb.com/` menu `connect` exemplo:
```
var url = `mongodb+srv://<database-user>:<password>@cluster0-xle1u.gcp.mongodb.net/test?retryWrites=true&w=majority`
```

# SUBINDO A APLICACAO COM DOCKER

Instale o docker em sua maquina lical: 

```
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
```

Execute o comando para iniciar o container redirecionando da porta do host para porta do container:

```
$ docker run -dti --name teste-build -p 8080:32321 dihogoteixeira/dt-collections-tags:905c335a bash
```

Acesso o browse para visualizar a aplicacao com localhost

```
http://localhost:8080
```

# PROVISIONANDO INFRA LOCALMENTE PARA RODAR A APLICACAO EM POD COM CI/CD DO GITLAB

Para iniciar o provisionamento de toda infraestrutura, precisamos instalar o Vagrant.
Ela contempla tres maquinas:

```
srv-gitlab       (servidor do Gitlab iniciado).
srv-orchestrator (servidor com o kubernetes rodando).
```

Nesta estrutura utilizaremos o gitlab para armazenar o codigo e prover o CI/CD com gitlab-runner executando todo o processamento de build da aplicaçao em PODs.

para inicar, navegue até a pasta ./Vagrant na raiz do projeto.

Inicie a instalaçao dos requisitos para rodar nossa estrutira (`vagrant` e `virtualbox`).

```
Download Vagrant >= 2:                              https://www.vagrantup.com/downloads.html
Download VirtualBox == 5.0 (Linux), (MacOS) >= 6.0: https://www.virtualbox.org/wiki/Download_Old_Builds_5_0 
Observação: (a ultima versao do virtualbox linux é incompativel com a ultima versao do vagrant).
```

## INICIANDO PROVISIONAMENTO DO AMBIENTE

Dentro da pasta `./Vagrant` inicie o projeto com o comando:

```
$ vagrant up
```

## CONFIGURANDO GITLAB-RUNNER ON KUBERNETES:

Documentaçao para configurar kubernetes no gitlab:
https://gitlab.com/help/user/project/clusters/add_remove_clusters#add-existing-cluster

1.0 - Realize o Login na maquina `srv-orquestrator` com o comando dentro da pasta `./Vagrant`:

```
$ vagrant ssh srv-orquestrator 
```

1.1 - Validando as configurações que precisaremos para configurar o Kubernetes (salve essas saidas)

```
$ kubectl cluster-info | grep 'Kubernetes master' | awk '/http/ {print $NF}'
```
```
$ kubectl get secret <secret name> -o jsonpath="{['data']['ca\.crt']}" | base64 --decode
```

1.2 - crie um arquivo `gitlab-admin-service-account.yaml` contendo:

```
apiVersion: v1
kind: ServiceAccount
metadata:
  name: gitlab-admin
  namespace: kube-system
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: gitlab-admin
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: gitlab-admin
  namespace: kube-system

```

1.3 - Aplique a ligação de conta de serviço e função de cluster ao seu cluster:

```
kubectl apply -f gitlab-admin-service-account.yaml
```

`Observação`: Você precisará da permissao `container.clusterRoleBindings.create` para criar funções no nível do cluster. Se você não tiver essa permissão, poderá ativar a Autenticação Básica como alternativa e executar o `kubectl apply` como administrador:

```
kubectl apply -f gitlab-admin-service-account.yaml --username=admin --password=<password>
```

Saída:

```
serviceaccount "gitlab-admin" created
clusterrolebinding "gitlab-admin" created
```

1.4 - capturando o token `gitlab-admin` service account:

```
kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep gitlab-admin | awk '{print $1}')
```

Copie o valor de `<authentication_token>`:

```
Name:         gitlab-admin-token-b5zv4
Namespace:    kube-system
Labels:       <none>
Annotations:  kubernetes.io/service-account.name=gitlab-admin
              kubernetes.io/service-account.uid=bcfe66ac-39be-11e8-97e8-026dce96b6e8

Type:  kubernetes.io/service-account-token

Data
====
ca.crt:     1025 bytes
namespace:  11 bytes
token:      <authentication_token>

```

