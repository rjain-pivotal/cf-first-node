# cf-first-node

## Hello World Node App to test the Offline Node Build pack 

### Clone this Repo
````
$git clone https://github.com/rjain-pivotal/cf-first-node.git
````

### Push this app 
````
$cf push
````

### Modify the manifest.yml with a specific buildpack
````
$nano manifest.yml

  buildpack: nodejs_buildpack
````

#### Download the Offline Buildpack from network.pivotal.io
```` https://network.pivotal.io/products/buildpacks#/releases/641
````

#### Install the offline buildpack
````
$cf buildpacks // Check the current buildpack
````

// The Order of the buildpack is used to during the staging to match the buildpack. You can reorder the buildpacks or 
// Leave it to the last and specify in manifest to use that specific buildpack

````
$cf create-buildpack  nodejs-rj nodejs_buildpack-cached-v1.5.1+1446853618.zip 9 --enable
````

````
$nano manifest.yml
  buildpack: nodejs-rj
````
````
$cf push
````

````
script
Creating container
Successfully created container
Downloading app package...
Downloaded app package (375K)
Downloading buildpacks (nodejs-rj)...
Downloading nodejs-rj...
Downloaded nodejs-rj
Downloaded buildpacks
Staging...
-------> Buildpack version 1.5.1
-----> Creating runtime environment
````

