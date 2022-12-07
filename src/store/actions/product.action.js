export const SELECTED_PRODUCT = "SELECTED_PRODUCT"
export const FILTERED_PRODUCT = "FILTERED_PRODUCT"

export const selectedProduct = (productID) => ({
    type: SELECTED_PRODUCT,
    productID
})

export const filteredProduct = (id) => ({
    type: FILTERED_PRODUCT,
    categoryID: id
})