# This file was generated by the Julia OpenAPI Code Generator
# Do not modify this file directly. Modify the OpenAPI specification instead.


@doc raw"""ToolBlueprint

    ToolBlueprint(;
        name=nothing,
        config=nothing,
    )

    - name::String : Name of the tool as registered in the system
    - config::Dict{String, Any}
"""
Base.@kwdef mutable struct ToolBlueprint <: OpenAPI.APIModel
    name::Union{Nothing, String} = nothing
    config::Union{Nothing, Dict{String, Any}} = nothing

    function ToolBlueprint(name, config, )
        OpenAPI.validate_property(ToolBlueprint, Symbol("name"), name)
        OpenAPI.validate_property(ToolBlueprint, Symbol("config"), config)
        return new(name, config, )
    end
end # type ToolBlueprint

const _property_types_ToolBlueprint = Dict{Symbol,String}(Symbol("name")=>"String", Symbol("config")=>"Dict{String, Any}", )
OpenAPI.property_type(::Type{ ToolBlueprint }, name::Symbol) = Union{Nothing,eval(Base.Meta.parse(_property_types_ToolBlueprint[name]))}

function check_required(o::ToolBlueprint)
    o.name === nothing && (return false)
    o.config === nothing && (return false)
    true
end

function OpenAPI.validate_property(::Type{ ToolBlueprint }, name::Symbol, val)
end
