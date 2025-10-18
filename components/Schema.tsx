import sanitize from 'sanitize-html'
import { WithContext, Thing } from 'schema-dts'

const Schema = <T extends Thing>({ value }: { value: WithContext<T> }) =>
    <script
        type='application/ld+json'
        dangerouslySetInnerHTML={ {
            __html: sanitize(
                JSON.stringify(value),
                { allowedTags: [], allowedAttributes: {} }
            )
        } }
    />

export default Schema