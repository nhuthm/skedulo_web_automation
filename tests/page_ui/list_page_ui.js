class List {
    constructor() {
        //Dropdown components
        this.dropdown_xpath = "//*[contains(@name,'sorting_dropdown')]"
        this.dropdown_name = "sorting_dropdown0"
        this.sort_by_dropdown_name = "s"
        this.dropdown_descending_option_xpath ="//option[@value='BY_DISCOUNT_DESCENDING']"

        //List components
        this.view_item_button_at_position_xpath = "//*[contains(@class,'DealGridItem')][%s]//*[contains(@class,'button-inner')]"
        this.item_at_position_xpath = "//*[contains(@data-component-type,'search-result') and contains(@class,'result')][%s]"
    }
}
module.exports = new List()