using CupOfCreative.Entities.Images;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace CupOfCreative.DataAccess
{
    public class DatabaseProvider
    {
        private const string CON_STR = @"Data Source=localhost;Initial Catalog=CupOfCreative;Integrated Security=True";

        private const string GET_THUMB_LIST_QUERY = "SELECT [Id], [UIColumn] FROM [Images]";

        public IEnumerable<ThumbEntity> GetThumbList()
        {
            using(var connection = new SqlConnection(CON_STR))
            {
                using(var command = new SqlCommand(GET_THUMB_LIST_QUERY, connection))
                {
                    connection.Open();

                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            yield return new ThumbEntity((Guid)reader["Id"], (int)reader["UIColumn"]);
                        }
                    }
                }
            }
        }
    }
}
