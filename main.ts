robot.onObstacleDistanceChanged(function () {
    distance = robot.obstacleDistance()
    if (scanning) {
        if (distance > 15) {
            scanning = 0
            robot.motorTank(30, 30)
        }
    } else {
        if (distance < 15) {
            robot.motorTank(-30, -30)
            robot.motorTank(0, 0)
            robot.motorTank(-25, 25)
            basic.pause(1000)
            scanning = 1
            robot.motorTank(25, -25)
        } else {
            robot.motorTank(30, 30)
        }
    }
})
let scanning = 0
let distance = 0
robot.dfRobotMaqueen.start()
