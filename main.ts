let nieuw = 0
let oud = radio.receivedPacket(RadioPacketProperty.SignalStrength)
basic.forever(function () {
    nieuw = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (oud < nieuw) {
    	
    } else {
    	
    }
})
