/*
    Task
    - Implement a switch statement to check against `env` environmental variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "PROD"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = ""
// Task: Add code here
function choosingEnv(env){    
    switch(env){
        case 'DEV':
            databaseCredential = "stageuser:password";
            break;
        case "STAGE":
            databaseCredential = "stageuser:password";
            break;
        case 'PROD':
            databaseCredential = "produser:password";
            break;
        default:
            databaseCredential = "evn value should either one of this : DEV/STAGE/PROD"
    }
    return databaseCredential
}

databaseCredential = choosingEnv(env);
console.log(`Database credential for environment ${env} is ${databaseCredential}`);
