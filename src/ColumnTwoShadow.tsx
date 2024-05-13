type Props = {
  width: number;
  position: number;
};

function ColumnTwoShadow({ width, position }: Props) {
  const inlineStyles: React.CSSProperties = {
    position: 'absolute',
    content: ' ',
    backgroundColor: 'green',
    width: `${width}%`,
    height: '20%',
    bottom: 0,
    right: '-150%',
  };

  console.log('width', width);
  console.log('position', position);

  return (
    <>
      <div className="shadow" style={inlineStyles}>
        123
      </div>
    </>
  );
}

export default ColumnTwoShadow;
