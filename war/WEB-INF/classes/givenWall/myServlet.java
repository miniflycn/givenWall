package givenWall;

import javax.servlet.ServletException;
import java.io.IOException;
import javax.servlet.http.*;

public class myServlet extends HttpServlet{
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		try{
			String user = req.getRequestURI();
        	req.getRequestDispatcher("/wall.jsp?user=" + user).forward(req, resp);
		}catch(ServletException err){
			err.printStackTrace();
		}
	}    
}
