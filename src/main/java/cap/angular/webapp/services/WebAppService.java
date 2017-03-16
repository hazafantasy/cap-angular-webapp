package cap.angular.webapp.services;

import org.springframework.stereotype.Service;

@Service("webAppService")
public class WebAppService {

    private int reps;

    public WebAppService() {

    }

    public String getJsonData() {
        reps++;
        return jsonData;
    }

    public static final String jsonData = " [\n"
            + "    {\n"
            + "        \"id\": \"1\",\n"
            + "        \"order_date\": \"21/04/1990\",\n"
            + "        \"user_name\": \"John Doe\",\n"
            + "        \"total\": \"$999.99\"\n"
            + "    },\n"
            + "    {\n"
            + "        \"id\": \"2\",\n"
            + "        \"order_date\": \"22/04/2000\",\n"
            + "        \"user_name\": \"Aragorn\",\n"
            + "        \"total\": \"$333.33\"\n"
            + "    },\n"
            + "    {\n"
            + "        \"id\": \"3\",\n"
            + "        \"order_date\": \"23/04/2017\",\n"
            + "        \"user_name\": \"Andraste\",\n"
            + "        \"total\": \"$111.11\"\n"
            + "    },\n"
            + "    {\n"
            + "        \"id\": \"4\",\n"
            + "        \"order_date\": \"24/04/2017\",\n"
            + "        \"user_name\": \"Lizz\",\n"
            + "        \"total\": \"$222.22\"\n"
            + "    },\n"
            + "    {\n"
            + "        \"id\": \"5\",\n"
            + "        \"order_date\": \"25/04/2017\",\n"
            + "        \"user_name\": \"Luke SkyWalker\",\n"
            + "        \"total\": \"$777.77\"\n"
            + "    },\n"
            + "    {\n"
            + "        \"id\": \"6\",\n"
            + "        \"order_date\": \"26/04/2017\",\n"
            + "        \"user_name\": \"Jill Valentine\",\n"
            + "        \"total\": \"$000.00\"\n"
            + "    }\n"
            + "]";
}
