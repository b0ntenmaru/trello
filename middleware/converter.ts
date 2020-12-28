export const convertToTree = (datas: any[], id = null, link = 'parent_id') => {
  const rootNode = datas.filter(data => data[link] === id);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const convertedTree: any = rootNode.map((data) => ({
    ...data,
    children: convertToTree(datas, data.id),
  }));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return convertedTree;
};
