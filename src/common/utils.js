export function debouce(func, delay, timer) {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    func.apply()
  }, delay);
  return timer
}

export function throttle(fn, interval) {
  let last = 0
  return function () {
    let context = this
    let args = arguments

    let now = +new Date()
    if ((now - last) > interval) {
      last = now
      fn.apply(context, args)
    }
  }
}