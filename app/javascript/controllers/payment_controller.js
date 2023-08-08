import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="payment"
export default class extends Controller {
  // HTML target elements that our controller will interact with
  static targets = ["selection", "additionalFields"];

  initialize() {
    this.showAdditionalFields();
  }

  showAdditionalFields() {
    let selection = this.selectionTarget.value;

    // disable/hide or enable/show field based on whether field type matches the selection
    for (let fields of this.additionalFieldsTargets) {
      fields.disabled = fields.hidden = fields.dataset.type != selection;
    }
  }
}
