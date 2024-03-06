import { Client, Databases, ID, Query } from 'appwrite';

const client = new Client();
    client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('kettle24112024')
const databases = new Databases(client);

const listTables = [
    ['users', '65da6108a3525fa2c5c7'],
    ['user_has_institutions', '65da635ca1f51a42a170'],
    ['institutions', '65da62ee4eaae5d4e99b'],
    ['project', '65dad0f5518c0115b7d5'],
    ['user_has_project', '65dad5799b54df99777f'],
    ['project_tasks', '65dca3cdac1d7572f31b'],
    ['project_categories', '65e793c74528f7e18b1d']
]


const kettleDatabase = {

    databaseId: "kettle-database-v0.1-24112024", 

    selectTable: function (tableName:String) {
        let tableSelected = 'ERROR TABLA NO VALIDA';
        for (let i = 0; i < listTables.length; i++) {
            if (tableName == listTables[i][0]) {
                tableSelected = listTables[i][1];
            }
        }
        return tableSelected;
    },

    select: async function (tableName: String, where: any = []) {
        
        let promise:any
        let newWhere:Array<string> = [];
        
        for (let i = 0; i < where.length; i++) {
            if (where[i][1] == '==') {
                newWhere.push(Query.equal(where[i][0], where[i][2]));
            }

            if (where[i][1] == '!=') {
                newWhere.push(Query.notEqual(where[i][0], where[i][2]));
            }

        }
        
        if (newWhere.length == 0) {     
            promise = databases.listDocuments(this.databaseId,this.selectTable(tableName));
        } else {
            promise = databases.listDocuments(this.databaseId,this.selectTable(tableName),newWhere);
        }
        
        return (await promise).documents;

        
    },

    create: async function (tableName: String, params = {}) {
        const promise = databases.createDocument(
            this.databaseId,
            this.selectTable(tableName),
            ID.unique(),
            params
        );
        return promise;
    },

    update: async function (tableName: String, idDocument:any, params = {}) {
        const promise = databases.updateDocument(
            this.databaseId,
            this.selectTable(tableName),
            idDocument,
            params
        );
        return promise;

    },

    local: {
        create: function (key: string, value: any) {
            
            if (typeof value === "object" ) {
                value = JSON.stringify(value);
            }

            localStorage.setItem(key, value);
            return value;
        },

        select: function (key: string) {
            let localItem = localStorage.getItem(key);
            if (localItem == undefined) { 
                return false;
            }
            if (JSON.parse(localItem)) {
                return JSON.parse(localItem);
            }
            return localItem;
        }
    }

};

export default kettleDatabase;

