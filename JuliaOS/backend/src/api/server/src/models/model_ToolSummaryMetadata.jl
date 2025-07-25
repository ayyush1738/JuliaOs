# This file was generated by the Julia OpenAPI Code Generator
# Do not modify this file directly. Modify the OpenAPI specification instead.


@doc raw"""ToolSummary_metadata

    ToolSummaryMetadata(;
        description=nothing,
    )

    - description::String : Description of the tool
"""
Base.@kwdef mutable struct ToolSummaryMetadata <: OpenAPI.APIModel
    description::Union{Nothing, String} = nothing

    function ToolSummaryMetadata(description, )
        OpenAPI.validate_property(ToolSummaryMetadata, Symbol("description"), description)
        return new(description, )
    end
end # type ToolSummaryMetadata

const _property_types_ToolSummaryMetadata = Dict{Symbol,String}(Symbol("description")=>"String", )
OpenAPI.property_type(::Type{ ToolSummaryMetadata }, name::Symbol) = Union{Nothing,eval(Base.Meta.parse(_property_types_ToolSummaryMetadata[name]))}

function check_required(o::ToolSummaryMetadata)
    true
end

function OpenAPI.validate_property(::Type{ ToolSummaryMetadata }, name::Symbol, val)
end
