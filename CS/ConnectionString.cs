namespace CS.CONNECTION
{
    public class ConnectionString
    {
        public string cs { get; set; }

        public ConnectionString()
        {
            string server = "d13xat1hwxt21t45.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "wyy58hdk8euoriv4";
            string userName = "ujsfwodssb8dddhf";
            string port = "3306";
            string password = "aza6uqhshq753iyv";

            // Assign to the class property 'cs'
            cs = $@"server={server};database={database};user={userName};password={password};port={port};";
        }
    }
}