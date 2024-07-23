import { UnifiedMdxParserParams } from "@ulld/utilities/types";
import { mdxParserList } from "./mdxParsers";

export const unifiedMdxParser = async (
    props: UnifiedMdxParserParams,
): Promise<string> => {
    let content = props.content;

    for await (const parser of mdxParserList) {
        let newContent = await parser({
            ...props,
            content: content,
        });
        content = newContent;
    }

    return content;
};
