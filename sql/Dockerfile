FROM mysql

ENV DEFAULT_AUTHENTICATION_PLUGIN=mysql_native_password
ENV MYSQL_ROOT_PASSWORD="password"
ENV MYSQL_DATABASE="movies"

ADD script.sql /docker-entrypoint-initdb.d/script.sql
