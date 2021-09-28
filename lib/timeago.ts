const DATE_UNITS = {
    day: 86400,
    hour: 3600,
    minute: 60,
    seconds: 1
}
type UnitValue = {
    value: number,
    unit: Intl.RelativeTimeFormatUnit
}
const getSecondsDiff = timestamp => (Date.now() - timestamp) / 1000

const getUnitAndValueDate = (secondsElapse: number): UnitValue => {
    let result: UnitValue = {
        value: 0, unit: "day"
    }
    for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
        if (secondsElapse >= secondsInUnit || unit == 'seconds') {
            const u = unit as Intl.RelativeTimeFormatUnit
            const value = Math.floor(secondsElapse / secondsInUnit) * -1

            result = {
                value, unit: u
            }
            return result
        }
    }
    return result
}
export const getTimeAgo = (timestamp: Number, locale: string) => {
    const rtf = new Intl.RelativeTimeFormat(locale)

    const secondsElapsed = getSecondsDiff(timestamp)
    const { value, unit }: UnitValue = getUnitAndValueDate(secondsElapsed)
    return rtf.format(value, unit)
}