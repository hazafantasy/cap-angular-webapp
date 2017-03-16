package cap.angular.webapp.beans;

public class InvoiceBean {
    private String orderNumber;
    private String orderDate;
    private String customerName;
    private String total;

    public InvoiceBean() {

    }

    public InvoiceBean(String orderNumber, String orderDate, String customerName, String total) {
        this.setOrderNumber(orderNumber);
        this.setOrderDate(orderDate);
        this.setCustomerName(customerName);
        this.setTotal(total);
    }


    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }
}
