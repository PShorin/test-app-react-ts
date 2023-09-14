import './List.scss';

const listText : {
  id: number;
  text: string;
}[] = [
  {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis.'}, 
  {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}, 
  {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis ultrices erat nec feugiat.'},
];

const List = () => {
  return (
    <div className="column list">
      {listText.map((item) => (
        <div className="row align-center">
          <div className='round'>
            <p className='medium24x32'>{item.id}</p>
          </div>
          <div>
            <p className='medium20x34'>
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
