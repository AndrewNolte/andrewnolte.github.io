$user_info = “INSERT INTO table_name (username, email) VALUES ('$_POST[username]', '$_POST[email]')”;

if (!mysql_query($user_info, $connect)) { 
    die('Error: ' . mysql_error());
} 

echo “Your information was added to the database.”; mysql_close($connect); 