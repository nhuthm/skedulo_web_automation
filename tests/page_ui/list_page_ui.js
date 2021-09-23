class List {
    constructor() {
        //Dropdown components
        this.dropdown_xpath = "//*[contains(@name,'sorting_dropdown')]"
        this.dropdown_name = "sorting_dropdown0"
        this.dropdown_descending_option_xpath ="//option[@value='BY_DISCOUNT_DESCENDING']"

        //List components
        this.view_item_button_at_position_xpath = "//*[contains(@class,'DealItem')][%s]//*[contains(@class,'button-inner')]"
    }
}
module.exports = new List()