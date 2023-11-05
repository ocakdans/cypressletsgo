pipeline{
    agent any
    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/features/*/*.feature", description: "Enter the feature file for execution")
        choice(name: 'BROWSER', choices:['chrome', 'firefox', 'edge'], description: "Choice the browser to execute")
    }
    stages{
        stage('Building'){
            steps{
                 echo "Building the application"
            }
           
        }
        stage('Testing'){
            steps{
                sh "npm install"
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploy'){
            steps{
                echo "Application deployed"
            }
        }
    }

}