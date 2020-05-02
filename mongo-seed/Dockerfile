FROM mongo

COPY init.json /init.json

CMD mongoimport --host mongo --db zoomwolves --collection casts --type json --file init.json --jsonArray