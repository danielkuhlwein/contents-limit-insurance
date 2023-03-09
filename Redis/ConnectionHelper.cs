using StackExchange.Redis;

namespace Redis
{
	public class ConnectionHelper
	{
		static ConnectionHelper()
		{
			ConnectionHelper.lazyConnection = new Lazy<ConnectionMultiplexer>(() =>
			{
				return ConnectionMultiplexer.Connect(ConfigurationManager.AppSetting["RedisURL"] ?? "localhost");
			});
		}
		private static Lazy<ConnectionMultiplexer> lazyConnection;
		public static ConnectionMultiplexer Connection
		{
			get
			{
				return lazyConnection.Value;
			}
		}
	}
}