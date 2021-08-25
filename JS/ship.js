var shipX
function shipMovement() {
    if (items === "bridge_key & candle"){
        if (ship.x == 700 && ship.y == 878) {
            if (player.isTouching(ship) && keyDown("e")) {
                player.x = 1350
                player.y = 330
                ship.x = 1370
                ship.y = 450

            }
        }
        else if (ship.x == 1370 && ship.y == 450) {
            if (player.isTouching(ship) && keyDown("e")) {
                player.x = 588
                player.y = 888
                ship.x = 700
                ship.y = 878

            }
        }
    }

}