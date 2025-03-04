/**
 * A class that represents a deferred operation.
 * @class
 */
export class Deferred {
  // The promise object associated with the deferred operation.
  #_promise
  /**
   * The function to call to resolve the deferred operation.
   * @type {(reason: any) => void}
   */
  #_resolve: (reason: any) => void
  /**
   * The function to call to reject the deferred operation.
   * @type {(reason: any) => void}
   */
  #_reject: (reason: any) => void
  /**
   * Creates a new instance of the Deferred class.
   * @constructor
   * @param description - A description of the deferred operation.
   */
  constructor(description?: string) {
    /**
     * The promise object associated with the deferred operation.
     * @type {Promise}
     * @private
     */
    this.#_promise = new Promise((resolve, reject) => {
      this.#_resolve = resolve
      this.#_reject = reject
    })

    /**
     * The function to call to resolve the deferred operation.
     * @type {function}
     * @private
     */
    this.#_resolve

    /**
     * The function to call to reject the deferred operation.
     * @type {function}
     * @private
     */
    this.#_reject
  }

  /**
   * Gets the promise object associated with the deferred operation.
   * @type {Promise}
   */
  get promise() {
    return this.#_promise
  }

  /**
   * Gets the function to call to resolve the deferred operation.
   * @type {function}
   */
  get resolve() {
    return this.#_resolve
  }

  /**
   * Gets the function to call to reject the deferred operation.
   * @type {function}
   */
  get reject() {
    return this.#_reject
  }
}
