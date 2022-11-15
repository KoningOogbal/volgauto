let nieuw = 0
let oud = radio.receivedPacket(RadioPacketProperty.SignalStrength)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 107)
basic.forever(function () {
    nieuw = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (oud < nieuw) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 107)
    } else {
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    }
    oud = nieuw
})
