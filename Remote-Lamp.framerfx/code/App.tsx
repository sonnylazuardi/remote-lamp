import * as React from "react"
import { Override, Data } from "framer"
// @ts-ignore
import { useSwitch } from "@framer/tishogeorgiev.switch/code"
// @ts-ignore
import { FirebaseData } from "@framer/hunterc.firebasedata/code/FirebaseData"

var firebaseConfig = {
    // TODO: copy your firebase config here
}

const data = FirebaseData(firebaseConfig, {
    color: 0,
    name: "",
})

function cleanText(str: string) {
    return str.replace(/\"/g, "").replace(/\\/g, "")
}

export function AppBody(props): Override {
    const controls = useSwitch()
    React.useEffect(() => {
        controls.setSwitchState("colorSwitch", parseInt(data.color))
    }, [data.color])
    return {}
}

export function Name(props): Override {
    return {
        value: cleanText(data.name),
        onValueChange(value) {
            data.name = cleanText(value)
        },
    }
}

export function NameText(props): Override {
    return {
        text: cleanText(data.name),
    }
}

export function ColorYellow(props): Override {
    const controls = useSwitch()
    return {
        onTap() {
            data.color = 1
            fetch(
                `https://maker.ifttt.com/trigger/color_yellow/with/key/{your_id}`,
                { method: "post" }
            )
            controls.setSwitchState("colorSwitch", 1)
        },
    }
}

export function ColorBlack(props): Override {
    const controls = useSwitch()
    return {
        onTap() {
            data.color = 2
            fetch(
                `https://maker.ifttt.com/trigger/turn_off/with/key/{your_id}`,
                { method: "post" }
            )
            controls.setSwitchState("colorSwitch", 2)
        },
    }
}

export function ColorPink(props): Override {
    const controls = useSwitch()
    return {
        onTap() {
            data.color = 0
            fetch(
                `https://maker.ifttt.com/trigger/color_pink/with/key/{your_id}`,
                { method: "post" }
            )
            controls.setSwitchState("colorSwitch", 0)
        },
    }
}
