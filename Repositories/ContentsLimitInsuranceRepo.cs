
using Models;
using Redis;

namespace contents_limit_insurance.Repositories;

public class ContentsLimitInsuranceRepo : IContentsLimitInsuranceRepo
{
	private readonly ICacheService _cacheService;
	private readonly string _itemsKey = "contentsLimitInsuranceItems";
	private readonly string _categoriesKey = "contentsLimitInsuranceCategories";

	public ContentsLimitInsuranceRepo(ICacheService cacheService)
	{
		_cacheService = cacheService;
	}

	public IEnumerable<ContentsLimitInsurance> GetItems()
	{
		return _cacheService.GetData<IEnumerable<ContentsLimitInsurance>>(_itemsKey);
	}

	public IEnumerable<ContentsLimitInsuranceCategory> GetCategories()
	{
		return _cacheService.GetData<IEnumerable<ContentsLimitInsuranceCategory>>(_categoriesKey);
	}

	public bool UpdateItem(ContentsLimitInsurance contentsLimitInsurance)
	{
		var contentsLimitInsuranceItems = _cacheService.GetData<IEnumerable<ContentsLimitInsurance>>(_itemsKey);
		var itemToUpdate = contentsLimitInsuranceItems.FirstOrDefault(x => x.Id == contentsLimitInsurance.Id);
		if (itemToUpdate != null)
		{
			itemToUpdate.Category = contentsLimitInsurance.Category;
			itemToUpdate.Name = contentsLimitInsurance.Name;
			itemToUpdate.Value = contentsLimitInsurance.Value;
			_cacheService.SetData(_itemsKey, contentsLimitInsuranceItems);
			return true;
		}
		return false;
	}

	public long AddItem(ContentsLimitInsurance contentsLimitInsurance)
	{
		var contentsLimitInsuranceItems = _cacheService.GetData<IEnumerable<ContentsLimitInsurance>>(_itemsKey);
		contentsLimitInsurance.Id = contentsLimitInsuranceItems.Any() ? contentsLimitInsuranceItems.Max(x => x.Id) + 1 : 1;
		contentsLimitInsuranceItems = contentsLimitInsuranceItems.Append(contentsLimitInsurance);
		_cacheService.SetData(_itemsKey, contentsLimitInsuranceItems);
		return contentsLimitInsurance.Id;
	}

	public bool GenerateSampleItems()
	{
		return _cacheService.InsertSampleData();
	}

	public bool DeleteItem(long id)
	{
		var contentsLimitInsuranceItems = _cacheService.GetData<IEnumerable<ContentsLimitInsurance>>(_itemsKey);
		var itemToDelete = contentsLimitInsuranceItems.FirstOrDefault(x => x.Id == id);
		if (itemToDelete != null)
		{
			contentsLimitInsuranceItems = contentsLimitInsuranceItems.Where(x => x.Id != id);
			_cacheService.SetData(_itemsKey, contentsLimitInsuranceItems);
			return true;
		}
		return false;
	}
}