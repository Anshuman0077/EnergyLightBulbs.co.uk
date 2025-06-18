import { lightBulbsList } from "./lightBulbs";

export default function CategoryDisplay() {
    return (
    <div>
      <h1>{lightBulbsList.name}</h1>

      {lightBulbsList.subcategory.map((sub, i) => (
        <div key={i}>
          <h2>{sub.name}</h2>
          <div className="grid grid-cols-3 gap-4">
            {sub.items.map((item, j) => (
              <div key={j}>
                <img src={item.img} alt={item.imgName} />
                <p>{item.imgName}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    )
}