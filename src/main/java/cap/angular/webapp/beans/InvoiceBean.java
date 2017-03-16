package cap.angular.webapp.beans;

public class InvoiceBean {
    private String id;
    private String order_date;
    private String user_name;
    private String total;

    public InvoiceBean(String id, String order_date, String user_name, String total) {
        this.id = id;
        this.order_date = order_date;
        this.user_name = user_name;
        this.total = total;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOrder_date() {
        return order_date;
    }

    public void setOrder_date(String order_date) {
        this.order_date = order_date;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }
}
