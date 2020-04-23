import React, { useCallback } from "react"
import { IconButton } from "@chakra-ui/core"
import { Goods } from "../data"

type ResultProps = {
  selectedGoods: Goods[]
  setSelectGoods: (value: React.SetStateAction<Goods[]>) => void
}

export const Result: React.FC<ResultProps> = ({ selectedGoods, setSelectGoods }) => {
  const remove = useCallback((index: number) => () => {
    setSelectGoods(prev => prev.filter((_, i) => i !== index))
  }, [setSelectGoods])

  return (
    <div>
      <ul>
      {selectedGoods.map((goods, index) => (
        <li key={index}>{ goods.name }<IconButton size="sm" onClick={remove(index)} icon="minus" aria-label="商品を削除" /></li>
      ))}
      </ul>
      <p>合計</p>
      <p>{ selectedGoods.reduce((acc, goods) => acc + goods.price, 0) }円</p>
      <p>{ selectedGoods.reduce((acc, goods) => acc + goods.point, 0) }ポイント</p>
    </div>
  )
}