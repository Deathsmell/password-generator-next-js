#!/bin/bash

#variable
WORK_PATH="${PWD}/src/open-api"
WORK_DIR_GENERATED="$WORK_PATH/generated"
SERVER_PORT="8080"
SERVER_DOMAIN="http://localhost"
GENERATOR_VERSION="5.2.1"
GENERATOR_JAR_NAME="generator"
GENERATOR_JAR="$WORK_PATH/$GENERATOR_JAR_NAME-$GENERATOR_VERSION.jar"
OPEN_API_JSON="$WORK_PATH/open-api.json"
OPEN_API_CONFIG="$WORK_PATH/open-api.config.json"

fetch_open_api_file() {
  curl --request GET -sL \
    --url "$SERVER_DOMAIN:$SERVER_PORT/swagger-api" \
    --output "$OPEN_API_JSON"
}

fetch_open_api_generator() {
  if [ -e "$GENERATOR_JAR" ]; then
    echo "Generator exist"
    else
      curl --request GET -sL \
           --url "https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/$GENERATOR_VERSION/openapi-generator-cli-$GENERATOR_VERSION.jar"\
           --output "$GENERATOR_JAR"
  fi
}

generate_api() {
  java -jar "$GENERATOR_JAR" generate -g typescript-axios \
    -i "$OPEN_API_JSON" \
    -o "$WORK_DIR_GENERATED" \
    -c "$OPEN_API_CONFIG" \
    --import-mappings=Date=java.time.LocalDateTime
}

remove_old_stuff() {
  if [ -d "$WORK_DIR_GENERATED" ]; then
    rm -rf "$WORK_DIR_GENERATED"
  fi

  find "$WORK_PATH" -type f -maxdepth 1 -iname "$GENERATOR_JAR_NAME-*.jar" -not-name="$GENERATOR_JAR_NAME-$GENERATOR_VERSION.jar" -delete
}


remove_old_stuff
mkdir "$WORK_DIR_GENERATED"
fetch_open_api_file
fetch_open_api_generator
generate_api
