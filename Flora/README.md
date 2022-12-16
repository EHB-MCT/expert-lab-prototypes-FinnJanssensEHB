# Flora Occurences Data Scaling

## Setup Instructions

1. Install [mongoimport](https://www.mongodb.com/docs/database-tools/mongoimport/). This is a command line tool for uploading datasets to mongodb.

1. Dowload Source Archive (Darwin Core Archive) from [gbfi.org](https://www.gbif.org/dataset/271c444f-f8d8-4986-b748-e7367755c0c1)

1. Unzip the .zip file and open a shell in the unzipped folder.

1. Use the following command to start uploading the dataset to mongodb (fill in your connection URI, username and password)

   `mongoimport --uri="<MONGO-CONNECTION-URI>" --username=<USERNAME> --password=<PASSWORD> --type=tsv --headerline --file=occurrence.txt`

   **_WARNING: with the free MongoDB plan, the upload will stop before reaching 100% due to the memory limit of the free plan. This is normal and not a problem for running this prototype_**

1. Change directory to where you want to clone the repository

   `cd some-dir/`

1. Clone this repository

   `git clone https://github.com/EHB-MCT/expert-lab-prototypes-FinnJanssensEHB.git`

1. Change directory into the `flora-backend` directory

   `cd Flora/flora-backend/`

1. Install packages

   `npm i`

1. Add a .env file with the following contents (substitute with your info)

   ```env
   MONGODB_URI="<MONGO-CONNECTION_URI>"
   MONGODB_DATABASE="<MONGO-DATABASE-NAME>"
   MONGODB_COLLECTION="occurrence"
   ```

1. Start the backend server

   `node index.js`

1. Navigate to frontend folder

   `cd ../flora-frontend/`

1. Install packages

   `npm i`

1. Start NextJS frontend in development mode

   `npm run dev`
