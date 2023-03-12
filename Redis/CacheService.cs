using Models;
using Newtonsoft.Json;
using StackExchange.Redis;

namespace Redis
{
	public class CacheService : ICacheService
	{
		private IDatabase _db;
		private static bool _sampleDataInserted = false;
		private static readonly object _lock = new object();
		private readonly int _expirationOffset = 60;

		public CacheService()
		{
			_db = ConnectionHelper.Connection.GetDatabase();
			InsertSampleData();
		}

		public T GetData<T>(string key)
		{
			var value = _db.StringGet(key);
			return value.HasValue ? JsonConvert.DeserializeObject<T>(value) : default;
		}

		public bool SetData<T>(string key, T value, int? expirationOffset = null)
		{
			TimeSpan expiryTime = expirationOffset != null
				? TimeSpan.FromMinutes(expirationOffset.Value)
				: TimeSpan.FromMinutes(_expirationOffset);
			lock (_lock)
			{
				var isSet = _db.StringSet(key, JsonConvert.SerializeObject(value), expiryTime);
				return isSet;
			}
		}

		public bool RemoveData(string key)
		{
			bool _isKeyExist = _db.KeyExists(key);
			if (_isKeyExist == true)
			{
				return _db.KeyDelete(key);
			}
			return false;
		}

		/// <summary>
		/// For testing purposes, insert sample data into the cache
		/// </summary>
		public bool InsertSampleData()
		{
			var expirationTime = DateTimeOffset.Now.AddMinutes(5.0);

			// Categories
			var contentCategories = new List<string>() {
				"Furniture",
				"Electronics",
				"Appliances",
				"Kitchen",
				"Clothing",
				"Jewelry",
				"Art And Collectibles",
				"Sports Equipment",
				"Musical Instruments",
				"Books And Media",
				"Other"
			};
			var categories = new List<ContentsLimitInsuranceCategory>();
			for (int i = 0; i < contentCategories.Count; i++)
			{
				categories.Add(new ContentsLimitInsuranceCategory()
				{
					Id = i + 1,
					Name = contentCategories[i]
				});
			}
			var categorySuccess = SetData<IEnumerable<ContentsLimitInsuranceCategory>>("contentsLimitInsuranceCategories", categories);

			// Items
			var items = new List<ContentsLimitInsurance>()
			{
				new ContentsLimitInsurance()
				{
					Id = 1,
					Name = "TV",
					Value = 2000,
					Category = categories.Find(x => x.Name == "Electronics")
				},
				new ContentsLimitInsurance()
				{
					Id = 2,
					Name = "Playstation",
					Value = 400,
					Category = categories.Find(x => x.Name == "Electronics")
				},
				new ContentsLimitInsurance()
				{
					Id = 3,
					Name = "Stereo",
					Value = 1600,
					Category = categories.Find(x => x.Name == "Electronics")
				},
				new ContentsLimitInsurance()
				{
					Id = 4,
					Name = "Shirts",
					Value = 1100,
					Category = categories.Find(x => x.Name == "Clothing")
				},
				new ContentsLimitInsurance()
				{
					Id = 5,
					Name = "Jeans",
					Value = 1100,
					Category = categories.Find(x => x.Name == "Clothing")
				},
				new ContentsLimitInsurance()
				{
					Id = 6,
					Name = "Pots and Pans",
					Value = 3000,
					Category = categories.Find(x => x.Name == "Kitchen")
				},
				new ContentsLimitInsurance()
				{
					Id = 7,
					Name = "Flatware",
					Value = 500,
					Category = categories.Find(x => x.Name == "Kitchen")
				},
				new ContentsLimitInsurance()
				{
					Id = 8,
					Name = "Knife Set",
					Value = 500,
					Category = categories.Find(x => x.Name == "Kitchen")
				},
				new ContentsLimitInsurance()
				{
					Id = 9,
					Name = "Misc",
					Value = 1000,
					Category = categories.Find(x => x.Name == "Kitchen")
				},
			};
			var itemSuccess = SetData<IEnumerable<ContentsLimitInsurance>>("contentsLimitInsuranceItems", items);

			return categorySuccess && itemSuccess;
		}
	}
}