const DATE_UNITS = {
    day: 86400,
    hour: 3600,
    minute: 60,
    seconds: 1
}

const getSecondsDiff = timestamp => (Date.now() - timestamp) / 1000

const getUnitAndValueDate = (secondsElapse) => {
    let result = {
        value: 0, unit: "day"
    }
    for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
        if (secondsElapse >= secondsInUnit || unit == 'seconds') {
            const u = unit 
            const value = Math.floor(secondsElapse / secondsInUnit) * -1

            result = {
                value, unit: u
            }
            return result
        }
    }
    return result
}
export const getTimeAgo = (timestamp, locale) => {
    const rtf = new Intl.RelativeTimeFormat(locale)

    const secondsElapsed = getSecondsDiff(timestamp)
    const { value, unit } = getUnitAndValueDate(secondsElapsed)
    return rtf.format(value, unit)
}