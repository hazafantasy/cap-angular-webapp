package cap.angular.webapp.services;

import cap.angular.webapp.beans.InvoiceBean;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("webAppService")
public class WebAppService {

    private List<InvoiceBean> invoiceBeanList;

    public WebAppService() {
        invoiceBeanList = new ArrayList<>();
        ObjectMapper mapper = new ObjectMapper();
        try {
            InvoiceBean[] invoiceBeanArray = mapper.readValue(jsonData, InvoiceBean[].class);
            for(InvoiceBean invoiceBean:invoiceBeanArray) {
                invoiceBeanList.add(invoiceBean);
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public String getJsonData() {
        //InvoiceBean[] invoiceBeans = invoiceBeanList.toArray(new InvoiceBean[0]);

        int i = invoiceBeanList.size() + 1;
        InvoiceBean newBean = new InvoiceBean(String.valueOf(i), "21/04/1990",
                "Haza", "$99.99");
        invoiceBeanList.add(newBean);
        String newJsonData;
        ObjectMapper mapper = new ObjectMapper();
        try {
            newJsonData = mapper.writeValueAsString(invoiceBeanList);
        }catch (Exception ex) {
            ex.printStackTrace();
            newJsonData = jsonData;
        }
        return newJsonData;
    }

    public static final String jsonData = " [\n"
            + "    {\n"
            + "        \"orderNumber\": \"1\",\n"
            + "        \"orderDate\": \"21/04/1990\",\n"
            + "        \"customerName\": \"John Doe\",\n"
            + "        \"total\": \"$999.99\"\n"
            + "    },\n"
            + "    {\n"
            + "        \"orderNumber\": \"2\",\n"
            + "        \"orderDate\": \"22/04/2000\",\n"
            + "        \"customerName\": \"Aragorn\",\n"
            + "        \"total\": \"$333.33\"\n"
            + "    },\n"
            + "    {\n"
            + "        \"orderNumber\": \"3\",\n"
            + "        \"orderDate\": \"23/04/2017\",\n"
            + "        \"customerName\": \"Andraste\",\n"
            + "        \"total\": \"$111.11\"\n"
            + "    },\n"
            + "    {\n"
            + "        \"orderNumber\": \"4\",\n"
            + "        \"orderDate\": \"24/04/2017\",\n"
            + "        \"customerName\": \"Lizz\",\n"
            + "        \"total\": \"$222.22\"\n"
            + "    },\n"
            + "    {\n"
            + "        \"orderNumber\": \"5\",\n"
            + "        \"orderDate\": \"25/04/2017\",\n"
            + "        \"customerName\": \"Luke SkyWalker\",\n"
            + "        \"total\": \"$777.77\"\n"
            + "    },\n"
            + "    {\n"
            + "        \"orderNumber\": \"6\",\n"
            + "        \"orderDate\": \"26/04/2017\",\n"
            + "        \"customerName\": \"Jill Valentine\",\n"
            + "        \"total\": \"$000.00\"\n"
            + "    }\n"
            + "]";
}
