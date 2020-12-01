
export function formatDuration(timeInMs) {
  const DAY = 24 * 3600 * 1000
  const HOUR = 3600 * 1000
  const MINUTE = 60 * 1000
  const SECOND = 1000

  const day = Math.floor(timeInMs / DAY)
  timeInMs = timeInMs % DAY
  const hour = Math.floor(timeInMs / HOUR)
  timeInMs = timeInMs % HOUR
  const minute = Math.floor(timeInMs / MINUTE)
  timeInMs = timeInMs % MINUTE
  const second = Math.floor(timeInMs / SECOND)
  timeInMs = timeInMs % SECOND
  return {
    day, hour, minute, second, ms: timeInMs
  }
}