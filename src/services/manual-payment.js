import { PaymentService } from "medusa-interfaces"

class IyzicoPaymentService extends PaymentService {
  static identifier = "iyzico"

  constructor() {
    super()
  }

  /**
   * Returns the currently held status.
   * @param {object} paymentData - payment method data from cart
   * @returns {string} the status of the payment
   */
  async getStatus(paymentData) {
    const { status } = paymentData
    return status
  }

  /**
   * Creates a manual payment with status "pending"
   * @param {object} cart - cart to create a payment for
   * @returns {object} an object with staus
   */
  async createPayment() {
    console.log("\n\n\n\n\nAUTHORIZING THE PAYMENT\n\n\n\n\n")
    return { status: "pending" }
  }

  /**
   * Retrieves payment
   * @param {object} data - the data of the payment to retrieve
   * @returns {Promise<object>} returns data
   */
  async retrievePayment(data) {
    console.log("\n\n\n\n\nAUTHORIZING THE PAYMENT\n\n\n\n\n")
    return data
  }

  /**
   * Updates the payment status to authorized
   * @returns {Promise<{ status: string, data: object }>} result with data and status
   */
  async authorizePayment() {
    console.log("\n\n\n\n\nAUTHORIZING THE PAYMENT\n\n\n\n\n")
    return { status: "authorized", data: { status: "authorized" } }
  }

  /**
   * Noop, simply returns existing data.
   * @param {object} sessionData - payment session data.
   * @returns {object} same data
   */
  async updatePayment(sessionData) {
    console.log("\n\n\n\n\nAUTHORIZING THE PAYMENT\n\n\n\n\n")
    return sessionData.data
  }

  /**
   .
   * @param {object} sessionData - payment session data.
   * @param {object} update - payment session update data.
   * @returns {object} existing data merged with update data
   */
  async updatePaymentData(sessionData, update) {
    console.log("\n\n\n\n\nAUTHORIZING THE PAYMENT\n\n\n\n\n")
    return { ...sessionData.data, ...update.data }
  }

  async deletePayment() {
    console.log("\n\n\n\n\nAUTHORIZING THE PAYMENT\n\n\n\n\n")
    return
  }

  /**
   * Updates the payment status to captured
   * @param {object} paymentData - payment method data from cart
   * @returns {object} object with updated status
   */
  async capturePayment() {
    console.log("\n\n\n\n\nAUTHORIZING THE PAYMENT\n\n\n\n\n")
    console.log("\n\n\n\n\nAUTHORIZING THE PAYMENT\n\n\n\n\n")
    return { status: "captured" }
  }

  /**
   * Returns the data currently held in a status
   * @param {object} paymentData - payment method data from cart
   * @returns {object} the current data
   */
  async getPaymentData(session) {
    console.log("\n\n\n\n\nAUTHORIZING THE PAYMENT\n\n\n\n\n")
    return session.data
  }

  /**
   * Noop, resolves to allow manual refunds.
   * @param {object} payment - payment method data from cart
   * @returns {string} same data
   */
  async refundPayment(payment) {
    console.log("\n\n\n\n\nAUTHORIZING THE PAYMENT\n\n\n\n\n")
    return payment.data
  }

  /**
   * Updates the payment status to cancled
   * @returns {object} object with canceled status
   */
  async cancelPayment() {
    console.log("\n\n\n\n\nAUTHORIZING THE PAYMENT\n\n\n\n\n")
    return { status: "canceled" }
  }
}

export default IyzicoPaymentService
