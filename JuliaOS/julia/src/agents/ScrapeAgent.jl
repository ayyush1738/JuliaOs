# File: julia/src/agents/ScrapeAgent.jl
module ScrapeAgent

export run

using HTTP
using Gumbo
using Cascadia

function run(config::Dict)
    url = get(config, "url", "https://example.com")
    tryc
        response = HTTP.get(url)
        html = parsehtml(String(response.body))
        title_elements = eachmatch(Selector("title"), html.root)
        titles = [node.text for node in title_elements]
        return Dict("status" => "success", "titles" => titles)
    catch e
        return Dict("status" => "error", "message" => string(e))
    end
end

end
