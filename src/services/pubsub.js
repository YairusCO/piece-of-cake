class PubSub {
	#events

	constructor() {
		this.#events = {}
	}

	unsubscribe(eventName, func) {
		return true
	}

	subscribe(eventName, func) {
		const exists = this.#events[eventName] || []

		const listOfInvocation = [...exists, func]
		this.#events[eventName] = listOfInvocation

		return () => {
			return this.unsubscribe(eventName, func)
		}
	}

	dispatch(eventName, ...args) {
		const events = this.#events[eventName]
		if (events) {
			events.forEach((func) => {
				func.apply(func, args)
			})
		}
	}
}

const pubSub = new PubSub()
export const dispatch = pubSub.dispatch.bind(pubSub)
export const subscribe = pubSub.subscribe.bind(pubSub)
