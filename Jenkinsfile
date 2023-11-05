pipeline{
    agent any
    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/features/**/*.feature", description: "enter the spec to execute")
        choice(name: "BROWSER", choices:['chrome', 'firefox', 'edge'], description: "choice the browser to execute")
    }

    stages{
        stage('Building'){
            steps{
                 echo "Building application"
            }
           
        }
        stage('Testing'){
            steps{
                sh "/usr/bin/npm i"
                sh "/usr/bin/npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying application"
            }
            
        }
    }
    // post{
    //     always
    // }
}