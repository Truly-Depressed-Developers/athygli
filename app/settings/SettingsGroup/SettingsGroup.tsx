'use client'

import {ReactNode, useState} from "react";
import {SettingsGroupItem} from "@/app/settings/SettingsGroup/SettingsGroupItem";

type Props<T> = {
  items: T[],
  addButton: boolean,
  header: (item: T) => string,
  summary: (item: T) => ReactNode
}

const SettingsGroup = <T extends Record<string, any>>({items, addButton, header, summary}: Props<T>) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <div>
      {items.map((data, i) => <SettingsGroupItem
        key={header(data)}
        name={header(data)}
        description={summary(data)}
        expanded={i === expandedIndex}
        addButton={addButton}
        onClick={() => setExpandedIndex(expandedIndex !== i ? i : -1)}
      />)}
    </div>
  );
}

export {SettingsGroup};