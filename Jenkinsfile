pipeline{
    agent any
    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/features/**/*.feature", description: "enter the spec to execute")
        choice(name: "BROWSER", choices:['chrome', 'firefox', 'edge'], description: "choice the browser to execute")
    }

    stages{
        stage('Building'){
            echo "Building application"
        }
        stage('Testing'){
            steps{
                sh "npm install"
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploy'){
            echo "Deploying application"
        }
    }
    // post{
    //     always
    // }
}