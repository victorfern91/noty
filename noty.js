class Noty {
  constructor() {
    this._listeners = new Map();
  }

  _getEventHandlers(eventName) {
    if (this._listeners.has(eventName)) {
      return this._listeners.get(eventName);
    }

    return [];
  }

  _getAllEventsHandlers(eventName) {
    return [...this._getEventHandlers(eventName), ...this._getEventHandlers('*')];
  }

  on(eventName, callback) {
    this._listeners.set(eventName, [...this._getEventHandlers(eventName), callback]);
  }

  emit(eventName, args = null) {
    this._getAllEventsHandlers(eventName).forEach(eventCallback => eventCallback(args));
  }

  off(eventName) {
    this._listeners.delete(eventName);
  }

  removeListener(eventName, callback) {
    const eventHandlers = this._getEventHandlers(eventName).filter(eventHandler => eventHandler !== callback);

    this._listeners.set(eventName, eventHandlers)
  }
}

export default new Noty();
