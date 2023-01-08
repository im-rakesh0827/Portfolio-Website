<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Loging Form</title>
</head>
<body>
<%@ page import="java.sql.*" %>
<%@ page import ="javax.swing.*" %>
<%

try{
	ResultSet rs = null;
	Connection con = null;
	PreparedStatement ps = null;
	final String DBURL = "jdbc:mysql://localhost:3306/onlinevoting";
	final String USERNAME = "root";
	final String PASSWORD = "Apple@0827";
	final String driver = "com.mysql.cj.jdbc.Driver";
	Class.forName(driver);
	con = DriverManager.getConnection(DBURL, USERNAME, PASSWORD);
	String vId = request.getParameter("voterId");
	String pwd = request.getParameter("password");
	if(vId.isEmpty() || pwd.isEmpty()){
		JOptionPane.showMessageDialog(
				null,
				"Missing Details",
				"Try Again",
				JOptionPane.ERROR_MESSAGE
				);

	}else{
		String query = "select * from voter where voterId=? and password=?";
		ps = con.prepareStatement(query);
		ps.setString(1, vId);
		ps.setString(2, pwd);
		rs = ps.executeQuery();

		if(rs.next()){
			out.print("<h1>You Have Logged In Successfully...<h1>");
			/* RequestDispatcher rd = request.getRequestDispatcher("");
			rd.forward(request, response); */
		}else{
			/* out.print("<h1>Login failed...<h1>");
			out.print("<h2>Invalid Login Credential...<h2>"); */

			JOptionPane.showMessageDialog(
					null,
					"Invalid Login Credential !",
					"Try Again",
					JOptionPane.ERROR_MESSAGE
					);
		}
	}

}catch(Exception e){
	out.print(e);
}


%>


</body>
</html>