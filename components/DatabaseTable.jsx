/**
 *
 * Display data for the given table
 *
 * */
export default function DatabaseTable({ data, title, color,intensity }){
  return (
    <>
      <div className="flex flex-col rounded-md p-2 ">
        <h3 className="font-mono text-xl">{title}</h3>
        <div className="flex-1">
          {data.map((d) => (
            <ul key={d.id} className={`flex flex-1 p-2 bg-${color}-${intensity} items-center m-2 rounded-lg`}>
              {Object.values(d).map((e) => (
                  
                <li className="flex gap-2 p-2 font-semibold text-center text-sm uppercase break-all">
                  {e}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
