<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.List" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<html>
<head>
	<title>givenWall</title>
</head>
<%
	String user = request.getParameter("user");
	if(user != null){
		pageContext.setAttribute("user", user);
%>
	<p>This is ${fn:escapeXml(user)}'s Wall! </p>
<%
	}else{
%>
	<p>You call visit other's Wall!</p>
<%
	}
%>
<body>


</body>
</html>
